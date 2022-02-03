import {invitationBloc} from 'core-logic/observables/invitationBloc';
import {lazy, Suspense} from 'react';
import {renderLoader} from 'utils/renderLoader';

const Users = lazy(() => import('app/pages/collectivite/Users/Users'));

export const UsersPage = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <Users invitationBloc={invitationBloc} />
    </Suspense>
  );
};
