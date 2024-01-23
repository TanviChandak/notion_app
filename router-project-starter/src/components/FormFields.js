import React from 'react';

export const FormFields = (props) => {
  const data = props.data;
  const renderData = data.map((elem) => {
    if (elem.type === "link") {
      return (
        <a key={elem.id} href={elem.url} className="mb-4 hover:text-yellow-400">
          {elem.fieldName}
        </a>
      );
    } else {
      return (
        <div key={elem.id} className="mb-1">
          <br />
          <input
            type={elem.type}
            placeholder={elem.fieldName}
            className="border-2 border-gray-200 rounded-md p-2 text-white bg-gray-700 w-48 focus:outline-none focus:border-blue-500"
          />
        </div>
      );
    }
  });

  return (
    <div className="flex flex-col text-center">
      {renderData}
    </div>
  );
};
