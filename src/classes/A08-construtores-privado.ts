//criando classe com conexão cmo banco de dados
//singleton - GoF | Factory Method - GoF
//são arquiteturas de projeto indicados quando se deseja criar instância de uma classe apenas uma vez e depois o reutilizar em outros locais
export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connectado: ${this.host}, ${this.user}, ${this.password}`);
  }

  static getDataBase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retorno de instância já criada.');
      return Database.database;
    }
    console.log('Criando nova instância.');
    Database.database = new Database(host, user, password);
    return Database.database;
  }
}

const db1 = Database.getDataBase('localhost', 'root', '123456');
db1.connect();

const db2 = Database.getDataBase('localhost', 'root', '123456');
db2.connect();

const db3 = Database.getDataBase('localhost', 'root', '123456');
db3.connect();

const db4 = Database.getDataBase('localhost', 'root', '123456');
db4.connect();

console.log(db1 === db2);
