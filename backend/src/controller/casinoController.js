import casinoModel from '../models/Casino.js'

const casinoController = {}

casinoController.GET = async (req, res) => {
    try {
        const casinos = await casinoModel.find()
        res.status(200).json(casinos)
    } catch (error) {
        console.error('Error fetching casinos:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

casinoController.POST = async (req, res) => {
    const { name, Categories, maxBet, minBet } = req.body

    if (!name || !Categories || maxBet === undefined || minBet === undefined) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        const newCasino = new casinoModel({ name, Categories, maxBet, minBet })
        await newCasino.save()
        res.status(201).json(newCasino)
    } catch (error) {
        console.error('Error creating casino:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
casinoController.PUT = async (req, res) => {
    const { id } = req.params
    const { name, Categories, maxBet, minBet } = req.body

    if (!name || !Categories || maxBet === undefined || minBet === undefined) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        const updatedCasino = await casinoModel.findByIdAndUpdate(id, { name, Categories, maxBet, minBet }, { new: true })
        if (!updatedCasino) {
            return res.status(404).json({ message: 'Casino not found' })
        }
        res.status(200).json(updatedCasino)
    } catch (error) {
        console.error('Error updating casino:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}
casinoController.DELETE = async (req, res) => {
    const { id } = req.params

    try {
        const deletedCasino = await casinoModel.findByIdAndDelete(id)
        if (!deletedCasino) {
            return res.status(404).json({ message: 'Casino not found' })
        }
        res.status(200).json({ message: 'Casino deleted successfully' })
    } catch (error) {
        console.error('Error deleting casino:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export default casinoController