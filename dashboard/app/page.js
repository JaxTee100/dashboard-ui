import CardItem from "@/components/home/card-widget";
import CardWidget from "@/components/home/card-widget";
import ChartWidget from "@/components/home/chart-widget";
import ContactsCard from "@/components/home/contacts";
import MyCards from "@/components/home/my-cards";
import SavingsWidget from "@/components/home/savings-widget";


export default function Home() {
  return (
   

    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
      <div className="lg:col-span-8">
        <div className="p-4 lg:p-6">
          <CardItem />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 ">
          <div className="p-4 lg:p-6 col-span-3">
            <ChartWidget />
          </div>
          <div className="col-span-3">
            <SavingsWidget />
          </div>
        </div>
      </div>
      <div className="w-full md:max-w-lg flex flex-col gap-4 mx-auto lg:col-span-4">
        <div className="p-4 lg:p-6">
          <ContactsCard />
        </div>
        <div className="p-4 lg:p-6">
         <MyCards />
        </div>
      </div>
    </div>
  )
}
