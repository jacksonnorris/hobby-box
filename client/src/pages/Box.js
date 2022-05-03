// Node Modules
import React from 'react';

const Box = () => {
  return (
    <main>
      <h4>Hobby Mystery Box</h4>
      <hr></hr>
      <div>
        <div>
          <div>
            <img src={''} alt={'mystery box'}></img>
          </div>
          <div>
            <ul>
              <li><img width={50} height={50} src={''} alt={'previous item 1'}></img></li>
              <li><img width={50} height={50} src={''} alt={'previous item 2'}></img></li>
              <li><img width={50} height={50} src={''} alt={'previous item 3'}></img></li>
            </ul>
          </div>
        </div>
        <div>
          <h4>Mystery Box Title</h4>
          <p>This Box May Contain:</p>
          <ul>
            <li>possible item 1</li>
            <li>possible item 2</li>
            <li>possible item 3</li>
          </ul>
          <p>Previous Boxes Box May Contain:</p>
          <ul>
            <li>past item 1</li>
            <li>past item 2</li>
            <li>past item 3</li>
          </ul>
        </div>
      </div>
      <div>
        <label>Select Value</label>
        <select>
          <option>$25 Dollars</option>
          <option>$50 Dollars</option>
          <option>$100 Dollars</option>
        </select>
        <label>Select Frequency</label>
        <select>
          <option>Every Month</option>
          <option>Every Other Month</option>
          <option>Every Six Months</option>
        </select>
        <button type={'submit'}>Subscribe to Box</button>
      </div>
    </main>
  );
};

export default Box;
