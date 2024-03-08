import React, { useState, useEffect } from "react";

const TaxpayerList = () => {
  const [taxpayers, setTaxpayers] = useState([]);

  useEffect(() => {
    // Fetch the list of taxpayers from the API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://ynhumjrgo3.execute-api.us-east-1.amazonaws.com/v1/taxpayers"
        );
        const data = await response.json();
        setTaxpayers(data.data);
      } catch (error) {
        console.error("Error fetching taxpayers:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div class="relative overflow-x-auto p-2">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Email
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                Phone
              </th>
              <th scope="col" class="px-6 py-3">
                Date Create
              </th>
            </tr>
          </thead>
          <tbody>
            {taxpayers.map((taxpayer) => (
              <tr
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={taxpayer.id}
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {taxpayer.name}
                </th>
                <td class="px-6 py-4">{taxpayer.email}</td>
                <td class="px-6 py-4">{taxpayer.address}</td>
                <td class="px-6 py-4">{taxpayer.phone_number}</td>
                <td class="px-6 py-4">{taxpayer.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TaxpayerList;
