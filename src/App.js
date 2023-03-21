import { React, useState, useEffect } from 'react';
import 'react-tabulator/lib/styles.css';
import 'react-tabulator/lib/css/tabulator.min.css'; // theme
import { ReactTabulator } from 'react-tabulator';
import { data, columns } from './data';

function App() {
  return (
    <div className="App">
      <ReactTabulator data={data} columns={columns} layout={'fitColumns'} />
    </div>
  );
}

export default App;
