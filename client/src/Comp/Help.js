

import React from 'react';

const Help = () => {
  return (
    <div className="help-container">
      <h1 className="help-heading">Help Center</h1>
      <p className="help-text">
        Welcome to our Help Center! If you have any questions or need assistance, please feel free to reach out to us.
      </p>
      <p className="help-text">
        You can contact our support team at support@example.com or call us at 
      </p>
      <p className="help-text">
        Our support hours are from Monday to Friday, 9 AM to 6 PM 
      </p>
      {/* <style jsx>
        {`
          .help-container {
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 20px;
            margin: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .help-heading {
            font-size: 24px;
            margin-bottom: 10px;
          }
          .help-text {
            font-size: 16px;
            margin-bottom: 10px;
          }
        `}
      </style> */}
    </div>
  );
};

export default Help;
