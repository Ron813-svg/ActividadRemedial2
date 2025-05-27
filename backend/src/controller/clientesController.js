import clienteModel from '../models/Clientes.js'

const clientesControl = {}

clientesControl.GET = async (req, res) => {
    try {
        const clientes = await clienteModel.find()
        res.status(200).json(clientes)
    } catch (error) {
        console.error('Error fetching clientes:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

clientesControl.POST = async (req, res) => {
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        const newCliente = new clienteModel({ name, email, phone })
        await newCliente.save()
        res.status(201).json(newCliente)
    } catch (error) {
        console.error('Error creating cliente:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

clientesControl.PUT = async (req, res) => {
    const { id } = req.params
    const { name, email, phone } = req.body

    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        const updatedCliente = await clienteModel.findByIdAndUpdate(id, { name, email, phone }, { new: true })
        if (!updatedCliente) {
            return res.status(404).json({ message: 'Cliente not found' })
        }
        res.status(200).json(updatedCliente)
    } catch (error) {
        console.error('Error updating cliente:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

clientesControl.DELETE = async (req, res) => {
    const { id } = req.params

    try {
        const deletedCliente = await clienteModel.findByIdAndDelete(id)
        if (!deletedCliente) {
            return res.status(404).json({ message: 'Cliente not found' })
        }
        res.status(200).json({ message: 'Cliente deleted successfully' })
    } catch (error) {
        console.error('Error deleting cliente:', error)
        res.status(500).json({ message: 'Internal server error' })
    }
}

export default clientesControl