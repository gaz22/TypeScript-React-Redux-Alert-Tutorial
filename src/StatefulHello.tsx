import * as React from "react";

export interface IProps{
  name: string;
  enthusiasmLevel?:number;
}

interface IState{
  currentEnthusiasm: number;
}

class Hello extends React.Component<IProps,IState>{
  constructor(props:IProps){
    super(props);
    this.state = {currentEnthusiasm: props.enthusiasmLevel || 1};
  }

  public onIncrement =()=> this.updateEnthusiasm(this.state.currentEnthusiasm +1);
  public onDecrement =()=> this.updateEnthusiasm(this.state.currentEnthusiasm -1);
  public helloWorld = () => alert("Hello World");

  public render(){
    const {name} = this.props;

    if(this.state.currentEnthusiasm<=0){
      throw new Error("Error happened");
    }

    return(
      <div className = "hello">
        <div className = "greeting">
          Hello{name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>

        <button onClick = {this.onIncrement}> + </button>
        <button onClick = {this.onDecrement}> - </button>

        <button onClick = {this.helloWorld}>Hello World</button>
      </div>
    );

  }

  public updateEnthusiasm(currentEnthusiasm:number){
    this.setState({currentEnthusiasm});
  }

}

export default Hello;

function getExclamationMarks(numChars: number){
  return Array(numChars+1).join('!');
}
