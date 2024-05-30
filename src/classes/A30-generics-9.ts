const objeto1: Record<string, string | number> = {
  nome: 'Afrânio',
  sobrenome: 'Nunes',
  idade: 24,
};
console.log(objeto1);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

const objeto2: PessoaRequired = {
  nome: 'Afrânio',
  sobrenome: 'Nunes',
  idade: 24,
};
console.log(objeto2);

//Required -> transforma chaves opcionais em obrigatórias 'required'
type PessoaRequired = Required<PessoaProtocol>;
//Partial -> transforma chaves obrigatórias em opcionais
type PessoaPartial = Partial<PessoaRequired>;
//Readonly -> transforma as chaves inutável depois de criada
type PessoaReadonly = Readonly<PessoaRequired>;
//Pick -> especifica as chaves com a qual quero trabalhar
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>;

const pessoaRequired: PessoaRequired = {
  nome: 'Afranio',
  sobrenome: 'Nunes',
  idade: 24,
};

const pessoaPartial: PessoaPartial = {
  idade: 24,
};

const pessoaReadonly: PessoaReadonly = {
  nome: 'Afranio',
  sobrenome: 'Dantas',
  idade: 24,
};

const pessoaPick: PessoaPick = {
  nome: 'Afranio',
  sobrenome: 'Dantas',
};

console.log(pessoaRequired, pessoaPartial, pessoaReadonly, pessoaPick);

//Exclude -> computa todos os tipos que não estão inclusos em outro tipo
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
const result: TipoExclude = 'A';

//Extract -> computa todos os tipos que estão inclusos em outro tipo
type TipoExtract = Extract<ABC, CDE>;
const result1: TipoExtract = 'C';
console.log(result, result1);

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

const accountMongo: AccountMongo = {
  _id: 'ansuifbnubgifdgc',
  nome: 'Afranio',
  idade: 24,
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { id: _id, ...accountData };
}

const accountMongoMod = mapAccount(accountMongo);
console.log('------------------');
console.log(accountMongo);
console.log('------------------');
console.log(accountMongoMod);
