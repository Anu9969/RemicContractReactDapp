import { useState } from 'react'
import './App.css'
import Web3 from 'web3'

const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/4e3461ff9766436abbbad5e8334dc6d2'))
<<<<<<< HEAD

const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "storeResult",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "msg",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "result",
        "type": "uint256"
      }
    ],
    "name": "Success",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "num2",
        "type": "uint256"
      }
    ],
    "name": "addNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "num2",
        "type": "uint256"
      }
    ],
    "name": "divNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "num2",
        "type": "uint256"
      }
    ],
    "name": "mulNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "result",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num1",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "num2",
        "type": "uint256"
      }
    ],
    "name": "subtractNum",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
]

function App() {
  const [num1 , setNum1] = useState(0)
  const [num2 , setNum2] = useState(0)
  const [result , setResult] = useState(0)
 
=======
>>>>>>> c4107f48def936cc50956212d421459ee43a2c74

 
 //contract address
  const address = "0x0b23234c4f742b58787afe7331e91e5c737a52d8"


  const contract  = new web3.eth.Contract(abi , address)

function App() {
  const [num1 , setNum1] = useState(0)
  const [num2 , setNum2] = useState(0)
  const [result , setResult] = useState(0)



      function add(){
        contract.methods.addNum(num1,num2).call().then((res)=>{
<<<<<<< HEAD
          setResult(res)
=======
          setResult(parseInt(res))
>>>>>>> c4107f48def936cc50956212d421459ee43a2c74
        })
      }
      function sub(){
        contract.methods.subtractNum(num1,num2).call().then((res)=>{
          setResult(parseInt(res))
        })
      }
      function mul(){
        contract.methods.mulNum(num1,num2).call().then((res)=>{
          setResult(parseInt(res))
        })
      }
      function div(){
        contract.methods.divNum(num1,num2).call().then((res)=>{
          setResult(parseInt(res))
        })
      }
 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <div className="p-6 bg-gray-500 shadow-lg rounded-lg">
        <input
          type="text"
          value={num1}
          placeholder="Enter number 1"
          className="mb-4 p-2 border bg-gray-200 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="text"
          value={num2}
          placeholder="Enter number 2"
          className="mb-4 p-2 border bg-gray-200 border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setNum2(e.target.value)}
        />
  
        <div className="flex space-x-4 mb-4">
          <button
            onClick={add}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            +
          </button>
          <button
            onClick={sub}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            -
          </button>
          <button
            onClick={mul}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            *
          </button>
          <button
            onClick={div}
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
          >
            /
          </button>
        </div>
  
        <h3 className="text-lg font-semibold text-gray-700">
          Result: {result != null ? result : "not calculated yet"}
        </h3>
      </div>
    </div>
  );
  
}

export default App
