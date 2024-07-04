import { FC } from 'react';
import { AppNewMark } from './AppNewMark';
import { Badge } from '../ui/badge';

export const AppPostHeader: FC = ({ title, date, tags}: any) => {
  return (
    <div>
      <h1 className="font-bold text-3xl md:text-5xl mt-24 mb-12">{title}</h1>
      <time className="text-gray-500 italic text-sm mb-1">{date}  <AppNewMark date={date}/></time>
      <span className="text-xs flex">
        Tag: &nbsp; <div>
          {tags.map((tag: string) => (
            <Badge key={tag} variant={'secondary'} className="mr-1"> {tag} </Badge>
          ))}
        </div>
      </span>
    </div>
  );
};
