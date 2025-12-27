const components = [
  { name: 'TradingPanel', test: require('./tradingpanel-wcag.test') },
  { name: 'BreederProfile', test: require('./breederprofile-wcag.test') },
  { name: 'NavigationMenu', test: require('./navigationmenu-wcag.test') },
  { name: 'TradingModeSwitch', test: require('./tradingmodeswitch-wcag.test') },
  { name: 'PetCard', test: require('./petcard-wcag.test') },
  { name: 'GuestAuthGateway', test: require('./guestauthgateway-wcag.test') }
];

module.exports = { components };

async function runChecks() {
  let allPassed = true;
  
  for (const component of components) {
    try {
      const result = await component.test();
      console.log(`${component.name}: ${result.status.toUpperCase()}`);
      if (result.status !== 'pass') allPassed = false;
    } catch (error) {
      console.error(`${component.name} check failed:`, error);
      allPassed = false;
    }
  }

  if (!allPassed) process.exit(1);
}

runChecks();
