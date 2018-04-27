export const handleLogin = () => {
    const { href } = window.location;
    const redirectHost = (window as any).__SSO_DOMAIN__;
    const clientId = (window as any).__SSO_CLIENTID__;
    const FERedirectURL = encodeURIComponent(href);
    const BDRedirectURL = encodeURIComponent(`${(window as any).__API_DOMAIN__}/wxapi/callback?FEURL=${FERedirectURL}`);
    const url = `${redirectHost}/oauth2.0/authorize?redirect_uri=${BDRedirectURL}&client_id=${clientId}`;
    window.location.href = url;
};
