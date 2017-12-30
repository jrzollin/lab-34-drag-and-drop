import './expense-item.scss';
import React from 'react';

class ExpenseItem extends React.Component{
  constructor(props){
    super(props);

    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragStart(e){
    console.log('dragging');
    let payload = e.dataTransfer.getData('text/json');
    let card = JSON.parse(payload);
    console.log(card);
  }

  handleDragOver(e){
    e.preventDefault();
    console.log('over');
  }

  handleDrop(e){
    e.preventDefault();
    console.log('dropped');
  }

  render(){
    return(
      <div className='expense-item' onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
        {this.props.expenses[this.props.categoryID].map((expense,i) =>
          <div key={expense.id} draggable="true" onDragStart={this.handleDragStart}>
            <p> {(expense.name)} </p>
            <button onClick={() => this.props.expenseDelete(expense)}> x </button>
          </div>
        )}
      </div>
    );
  }
};

export default ExpenseItem;
