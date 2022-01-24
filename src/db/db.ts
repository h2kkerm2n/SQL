import { createConnection, ConnectionOptions} from 'typeorm';

export async function openDatabaseConnection (){
   /// await closedatabaseconnection(); 
    const option:ConnectionOptions = {
         type: 'mysql',
          host: 'localhost',
          port: 3306,
          username: 'root',
          password: 'tere1245'
          database: 'blog',
        
    };
    const conn = await createConnection(options);
    if (!conn.isConnected){
        throw new Error('connection to database failed!');
    }
    return conn;
    
};
