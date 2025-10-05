import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import Image from 'next/image';
import logo from '@/assets/logo-inverse.png';

export default function Home() {
  return (
    <div className="">
      <main className="max-w-md mx-auto mt-10">
        <Card>
          <CardHeader>
            <CardTitle>
              <h1 className="cookie-regular text-2xl">FAST LINKS</h1>
            </CardTitle>
            <CardDescription>Fast Links app allow to create a links, comments and notes</CardDescription>
            <CardAction>Version: 1.0.0</CardAction>
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter>
            <p className="text-xs flex flex-row flex-nowrap items-center w-full justify-center">
              <Image className="" src={logo} alt="logo" width={64} height={64} priority />
              <span className="ml-2"> ©2025 EPower Systems, Inc.</span>
            </p>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
