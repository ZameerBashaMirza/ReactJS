import React from 'react';

const Hello=(props)=>{
    // return(
    //     <div><h1>
    //         Hello Zameer</h1></div>
    // );

//    return React.createElement('div',{id:'Hello',className:'dummyClass'},React.createElement('h6',null,'Hello Zameer'));
console.log(props);
return(<div>
    <h1> Hello {props.name}a.k.a.{props.heroName}</h1>
{props.children}
</div>
);
}

export default Hello