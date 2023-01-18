import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

// estabelecer a conexão com o banco 

export const connection = knex({
	client: "mysql",
	connection: {
    host: "35.226.146.116",
    //process.env.DB_HOST,
    port: 3306,
    user: "4415849-jennifer-almeida",
    //process.env.DB_USER,
    password: "IJJANzzcv4odDNA8gg4s",
    //process.env.DB_PASS,
    database: "jbl-4415849-jennifer-almeida",
    //process.env.DB_NAME,
    multiStatements: true
  }
});

export default connection;