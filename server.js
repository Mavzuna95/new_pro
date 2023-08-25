const ldap = require('ldapjs');

const server = ldap.createServer();

server.bind('cn=root', (req, res, next) => {
  if (req.dn.toString() !== 'cn=root' || req.credentials !== 'secret')
    return next(new ldap.InvalidCredentialsError());

  res.end();
  return next();
});

server.listen(1389, () => {
  console.log('LDAP server up at: %s', server.url);
});