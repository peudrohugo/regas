"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function FuellingHistoryTable() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const driver = JSON.parse(localStorage.getItem("driver") || "");

    fetch(`http://localhost:3333/driver/fuellingHistory/${driver?.id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);

  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Fuel</Th>
            <Th isNumeric>Amount</Th>
            <Th isNumeric>Price</Th>
            <Th>Date</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.map((register, index) => {
            return (
              <Tr key={index}>
                <Td className="capitalize-first">{register?.fuelType}</Td>
                <Td isNumeric>{register?.quantity}</Td>
                <Td isNumeric>{parseFloat(register?.totalPrice).toFixed(2)}</Td>
                <Td>
                  <Tooltip
                    label={new Date(
                      `${register?.fuellingDate}`
                    ).toLocaleString()}
                  >
                    <Button size="sm" colorScheme="yellow" variant="outline">
                      <SearchIcon />
                    </Button>
                  </Tooltip>
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
