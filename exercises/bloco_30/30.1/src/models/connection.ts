import mongoose from 'mongoose';

const connection = (mongoDatabaseURI = 'mongodb://localhost:/world_cups') => (
  mongoose.connect(mongoDatabaseURI)
);

export default connection;
