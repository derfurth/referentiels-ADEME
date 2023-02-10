import {Link} from 'react-router-dom';

export type TFilArianeLink = {
  path?: string;
  displayedName: string;
};

type Props = {
  links: TFilArianeLink[];
};

const FilAriane = ({links}: Props) => {
  return (
    <div className="flex items-center flex-wrap gap-y-0.5 pr-6 text-xs text-gray-500">
      {links.map((link, i) => (
        <div key={link.displayedName} className="flex items-center shrink-0">
          {link.path ? (
            <Link
              className="p-1 underline shrink-0 text-gray-500 !shadow-none hover:text-gray-600"
              to={link.path}
            >
              {link.displayedName}
            </Link>
          ) : (
            <div key={link.displayedName}>{link.displayedName}</div>
          )}
          {i + 1 < links.length && (
            <div
              key={i}
              className="fr-fi-arrow-down-s-line scale-75 shrink-0 -rotate-90"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FilAriane;
