import { Card, Typography } from "@material-tailwind/react";
 

 
export function ProductInvoiceTable({TABLE_HEAD,TABLE_ROWS}) {
  return (
    <Card className="max-h-72 w-full overflow-scroll">
      <table className="w-full h-full table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={toString(Math.random()*1000)}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map((values, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={toString(Math.random()*1000)}>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {index+1}
                  </Typography>
                </td>
                {Object.keys(values).map((v,idx)=><td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {values[v] == null?"None":values[v]}
                  </Typography>
                </td>)}
              </tr>
            )}
          )}
        </tbody>
      </table>
    </Card>
  );
}
