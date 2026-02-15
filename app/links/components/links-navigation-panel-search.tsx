'use client';

import { PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useRef, useState } from 'react';

import { Popover } from '@radix-ui/react-popover';
import { useRouter } from 'next/navigation';

export default function LinksNavigationPanelSearch({
  searchUrl,
  filterTags,
  filterName,
}: Readonly<{ searchUrl: string; filterTags: string; filterName: string }>) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [filterNameValue, setFilterNameValue] = useState(filterName);
  const [filterTagsValue, setFilterTagsValue] = useState(filterTags);
  const selectRef = useRef(null);

  const handleSearch = () => {
    const tags = getSelectValues(selectRef.current);
    const tagsFilter = tags.join(',');

    setFilterTagsValue(tagsFilter);
    setOpen(false);
    router.push(
      `${searchUrl || '/links'}?tags=${encodeURIComponent(tagsFilter)}&${
        filterNameValue ? 'search=' + encodeURIComponent(filterNameValue) : ''
      }`
    );
  };

  const getSelectValues = (select: HTMLSelectElement | null) => {
    const result: string[] = [];

    if (select == null) {
      return result;
    }

    const options = select.options;
    let opt;

    for (let i = 0, iLen = options.length; i < iLen; i++) {
      opt = options[i];

      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  };

  return (
    <div className="flex flex-row flex-nowrap w-96">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <div
            onClick={() => setOpen(true)}
            className="whitespace-nowrap text-ellipsis overflow-hidden max-w-48 bg-blue-500 text-white px-4 py-1 rounded"
          >
            {filterNameValue || filterTagsValue ? filterNameValue + ' ' + filterTagsValue : 'Search'}
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <input
            type="text"
            placeholder="Filter by name or url"
            value={filterNameValue}
            onChange={(e) => setFilterNameValue(e.target.value)}
            className="border rounded p-2 w-full mb-2"
          />
          <select name="pets" multiple className="border p-2 w-full rounded h-102" ref={selectRef}>
            <option value="AndroidCompose">Android Compose</option>
            <option value="Kotlin">Kotlin</option>
            <option value="Angular">Angular</option>
            <option value="Javascript">Javascript</option>
            <option value="Typescript">Typescript</option>
            <option value="Programming">Programming</option>
            <option value="Css">Css</option>
            <option value="Scss">Scss</option>
            <option value="RxJs">RxJs</option>
            <option value="NestJs">NestJs</option>
            <option value="Music">Music</option>
            <option value="Film">Film</option>
            <option value="Purchases">Purchases</option>
            <option value="Html">Html</option>
            <option value="Web">Web</option>
            <option value="D3">D3</option>
            <option value="React">React</option>
            <option value="AzureMap">AzureMap</option>
            <option value="GIT">GIT</option>
            <option value="Print">Print</option>
            <option value="Other">Other</option>
            <option value="Work">Work</option>
          </select>
          <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
            Search
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}

/*
 <input
	type="text"
	placeholder="Filter by tag..."
    value={value}
    onChange={(e) => setValue(e.target.value)}
    className="border rounded p-2 flex-1 mr-1"
/>
*/
