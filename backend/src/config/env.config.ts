import dotenv from 'dotenv';


dotenv.config();

export const port = process.env.PORT || 3000;
export const db_url = process.env.DB_URL || "";