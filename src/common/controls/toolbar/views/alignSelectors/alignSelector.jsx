/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  AlignLeft, AlignCenter, AlignRight, AlignJustify,
} from 'react-feather';

const AlignSelector = () => (
  <>
    <button className="ql-list" value="ordered" type="button" />
    <button className="ql-list" value="bullet" type="button" />
    <select className="ql-align" defaultValue="x">
      <option value="">
        <AlignLeft />
      </option>
      <option value="center">
        <AlignCenter />
      </option>
      <option value="right">
        <AlignRight />
      </option>
      <option value="justify">
        <AlignJustify />
      </option>
    </select>
  </>
);

export default AlignSelector;
