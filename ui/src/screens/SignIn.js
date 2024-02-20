import React from 'react';
import { Button, Card, CardBody, Input, Typography } from "@material-tailwind/react";

function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center bg-blue-500"> {/* Set the background color to blue */}
      <Card className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
        <CardBody className="p-8">
          <Typography variant="h5" color='black' className="mb-8 text-center">
            Sign In
          </Typography>
          <div className="mb-4">
            <label className="block text-blue">Email</label>
            <Input type="email" placeholder="Enter your email" className="border rounded-md py-2 px-4 " />
          </div>
          <div className="mb-8">
            <label className="block text-blue">Password</label>
            <Input type="password" placeholder="Enter your password" className="border rounded-md py-2 px-4 " />
          </div>
          <div className="flex justify-center">
            <Button color="lightBlue">Sign In</Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default SignIn;
