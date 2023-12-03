import Header from "@/components/Header";
import ListItem from "@/components/ListItem";



export default async function Home() {
  

  return (
    <div className=" w-full h-full rounded-lg bg-neutral-900 overflow-hidden overflow-y-auto ">
        <Header className=" w-full" >
           <p className='text-2xl '>Welcome back</p>
           <ListItem 
           image={'/images/liked.png'} 
           name={'liked songs' }
           href="/"
           />
        </Header>
        <div className="mt-2 ml-2">
          <div className=''>
            <h2 className="text-2xl font-bold">Newest songs</h2>
          </div>
          <div>List of song</div>
        </div>
    </div>
   )

}
    