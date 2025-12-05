import Contact from "../Models/contact.js";


// ==================== CREATE CONTACT MESSAGE ====================
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields required" });
    }

    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });

  } catch (error) {
    console.error("Contact Create Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
};


// ==================== GET ALL CONTACTS (ADMIN PAGE) ====================
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Get Contacts Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
};


// ==================== DELETE A MESSAGE ====================
export const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Message deleted successfully",
    });

  } catch (error) {
    console.error("Delete Contact Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
};
