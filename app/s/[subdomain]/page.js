'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkDomainExists } from '@/redux/slices/subDomainActionSlice';

export default function SubdomainPage({ params }) {
  const dispatch = useDispatch();
  const { checkDomainExistsData, checkDomainExistsDataStatus } = useSelector(state => state.subDomain);

  useEffect(() => {
    const post = {
      subdomain: params.subdomain,
    }
    dispatch(checkDomainExists(post));
  }, [params.subdomain]);

  if (checkDomainExistsDataStatus === 'loading') return <p>Checking...</p>;
  if (checkDomainExistsDataStatus === 'failed') return <p>404 Not Found</p>;
  if (!checkDomainExistsData?.exists) return <p>Invalid Subdomain</p>;

  return <div>Valid Subdomain: {params.subdomain}</div>;
}
