import {expect} from 'chai';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators
// http://koajs.com/

class Company {
  constructor(customers){
    this.customers = customers;
  }
}

describe('Generators', ()=>{
  it('Company should be iterable by customers', ()=>{
    let company = new Company(['Davy', 'Thomas', 'Lars']);
    // TODO Fix the line below to extract the list of customers from the Company instance.
    expect([...company]).to.deep.equal(['Davy', 'Thomas', 'Lars']);
  });
});
