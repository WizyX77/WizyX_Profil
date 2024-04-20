import { technologiesAndLanguages } from '@/utils/variables';

export default function LanguagesAndTechnologies() {
  return (
    <div className='mt-6 container mx-auto pb-8 w-11/12 sm:pb-10 sm:w-9/12 md:w-7/12'>
      <div className='space-y-2 my-5'>
        <h3 className='font-semibold text-3xl text-zinc-200'> Kullandığım Diller Ve Sayfalar </h3>
        <div className='mt-4 grid gap-2 sm:grid-cols-3 md:grid-cols-4'>
          {technologiesAndLanguages.map((props, key) => (
            <div className='area' key={key}>
              <div className='rounded-md overflow-x-hidden p-4 transition duration-200 bg-zinc-900/30 hover:bg-zinc-900/70 items-center justify-between flex space-x-2'>
                <div className='line-clamp-2'>
                  <h2 className='font-semibold text-zinc-200 truncate'>{props.name}</h2>
                </div>
                <div className='flex-shrink-0'>
                  <props.iconURL size={'23px'}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}