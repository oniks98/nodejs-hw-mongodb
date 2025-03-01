// src/db/models/contact.js
import { model, Schema } from 'mongoose';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      required: true,
      default: 'personal',
    },
  },
  {
    timestamps: true, // Додає поля createdAt і updatedAt
    versionKey: false, // Видаляє поле __v, яке додає mongoose
  },
);

export const ContactsCollection = model('contacts', contactsSchema);
