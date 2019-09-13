const { programs } = require('../fixtures.json');

exports.getPrograms = () => programs;

exports.getProgramById = (payload) =>  programs.find(p => p.id === payload.id);