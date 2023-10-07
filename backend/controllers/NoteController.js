import { response } from "express";
import Notes from "../models/NoteModel.js";

export const getNotes = async (req, res) => {
    try {
        const notes = await Notes.findAll();
        res.status(200).json(notes);
    } catch (error) {
        console.log(error.message);
    }
}

export const getNoteById = async (req, res) => {
    try {
        const note = await Notes.findByPk(req.params.id);
        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
    }
}

export const createNote = async (req, res) => {
    try {
        const note = await Notes.create(req.body);
        res.status(200).json(note);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateNote = async (req, res) => {
    try {
        const note = await Notes.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({message: "Note updated successfully"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteNote = async (req, res) => {
    try {
        const note = await Notes.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({message: "Note deleted successfully"});
    } catch (error) {
        console.log(error.message);
    }
}