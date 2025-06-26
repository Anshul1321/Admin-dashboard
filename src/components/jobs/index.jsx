import React from 'react';

const Jobs = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Jobs Table</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">Rendering Jobs</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">Waiting Jobs</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">Completed Jobs</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600 uppercase">Failed Jobs</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-6 py-4 text-sm text-gray-700">14</td>
              <td className="px-6 py-4 text-sm text-gray-700">14</td>
              <td className="px-6 py-4 text-sm text-gray-700">14</td>
              <td className="px-6 py-4 text-sm text-gray-700">14</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobs;