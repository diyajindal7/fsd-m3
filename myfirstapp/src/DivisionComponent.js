import React, { Component } from 'react'

function DivisionComponent({ a,b}){
    if (b===0) {
        throw new Error("division by zero error");
    }

    const result= a/b;
    return (
        <div>
        <h1>division result: {result}</h1>
        </div>
    );
}
export default DivisionComponent;
