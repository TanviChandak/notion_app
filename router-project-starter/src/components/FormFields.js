import React from 'react';
import { useForm, Controller } from 'react-hook-form';

export const FormFields = ({ data, onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm();

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
          {elem.type !== 'password' ? (
            <Controller
              name={elem.fieldName.toLowerCase()}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type={elem.type}
                  placeholder={elem.fieldName}
                  {...field}
                  className={`border-2 border-gray-200 rounded-md p-2 text-white bg-gray-700 w-full ${errors[elem.fieldName.toLowerCase()] ? 'border-red-500' : ''} focus:outline-none focus:border-blue-500`}
                />
              )}
            />
          ) : (
            <Controller
              name={elem.fieldName.toLowerCase()}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  type={elem.type}
                  placeholder={elem.fieldName}
                  {...field}
                  className={`border-2 border-gray-200 rounded-md p-2 text-white bg-gray-700 w-full ${errors[elem.fieldName.toLowerCase()] ? 'border-red-500' : ''} focus:outline-none focus:border-blue-500`}
                />
              )}
            />
          )}

          {errors[elem.fieldName.toLowerCase()] && (
            <p className="text-red-500 mt-1">{errors[elem.fieldName.toLowerCase()].message}</p>
          )}
        </div>
      );
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col text-center">
        {renderData}
        {/* <button type="submit" className="bg-yellow-400 text-black py-2 px-4 rounded mr-2 hover:text-white">
          Submit
        </button> */}
      </div>
    </form>
  );
};
