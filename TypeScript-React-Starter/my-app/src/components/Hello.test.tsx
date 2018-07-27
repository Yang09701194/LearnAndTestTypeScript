
import * as React from  'react';
import * as enzyme from  'enzyme';
import Hello from  './Hello';

// 我個人認為  這個測試還滿無聊的   
// 如果寫久了應該會視為理所當然  或者用眼睛測一側就好  不用花時間寫一堆字
// 或許我之後   會有些改觀也是有可能的

it('render the correct text when no enthusiasm level is given', ()=>{
    const hello = enzyme.shallow(<Hello name="Daniel" />)
    expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

it ('renders the correct text with an implicit enthusiasm level of 1', ()=>{
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={1} />);
    expect(hello.find(".greeting").text).toEqual('Hello Daniel!!!!!')
});

//toEqual
it ('renders the correct text with an implicit enthusiasm level of 5', ()=>{
    const hello = enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />);
    expect(hello.find(".greeting").text).toEqual('Hello Daniel!!!!!')
});
//toThrow
it('throws when the enthusiasm level is 0', ()=>{
    expect( ()=>{
        enzyme.shallow(<Hello name="Daniel" enthusiasmLevel={5} />)
    }  ).toThrow
})

it('throws when the enthusiasm level is negative', () => {
    expect(() => {
      enzyme.shallow(<Hello name='Daniel' enthusiasmLevel={-1} />);
    }).toThrow();
  });




  