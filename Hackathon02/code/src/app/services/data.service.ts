import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  public cutString(string) {
    let result = [];
    let temp = [];
    let dau = ["+", "-", "*", "/"];
    let input = string.split("");
    let isDigit =/\d/;
    for (let i = 0; i < input.length; i++) {
        if (isDigit.exec(input[i])) {
            if (i == input.length - 1) {
                result.push(input[i])
            }
            else {
                temp.push(input[i]);
            }
        } else {
            if (input[i] == "(") {
                result.push(input[i])
            } else if (input[i] == ")") {
                result.push(temp.join(""));
                temp = [];
                result.push(input[i])
            } else {
                result.push(temp.join(""))
                temp = []
                result.push(input[i])
            }
        }
    }
    let valueToRemove = "";
    result = result.filter(item => item !== valueToRemove)
    return result;
}
  public infixToPostfix(input) {
    let stack = [], answer = [], char;
    const operands = {
      '(': 0,
      '+': 1,
      '-': 1,
      "*": 2,
      "/": 2,
    };

    for (let char of input) {
      let currentPrecedence = operands[char];
      if (operands[char] == 0) {
        stack.push(char);
        continue;
      }
      if (char == ')') {
        while (operands[stack[stack.length - 1]] != 0) {
          answer.push(stack.pop())
        }
        stack.pop();
        continue;
      }
      if (currentPrecedence) {
        let peek = operands[stack[stack.length - 1]];
        // pop until the peek is smaller
        while (peek >= currentPrecedence) {
          answer.push(stack.pop());
          peek = operands[stack[stack.length - 1]];
        }
        stack.push(char);
      } else { // not operand, push to answer
        answer.push(char);
      }
    }
    while (stack.length > 0) {
      answer.push(stack.pop())
    }
    return answer;
  }

  public calc(str, num1, num2) {
    switch (str) {
      case '+': return num1 + num2; break;
      case '-': return num1 - num2; break;
      case '*': return num1 * num2; break;
      default: return num1 / num2; break;
    }
  }

  public executePostfix(str) {
    let stack = [], operand1, operand2, tempOperand;
    let operators = ['+', '-', '*', '/'];
    // stack = cutString(str)
    for (let char of str) {
      // char = str.charAt(i);
      if (operators.indexOf(char) >= 0) {
        // operate
        operand2 = Number(stack.pop());
        operand1 = Number(stack.pop());
        tempOperand = this.calc(char, operand1, operand2)
        stack.push(tempOperand);
      } else {
        stack.push(char);
      }
    }
    return stack.pop();
  }
}
