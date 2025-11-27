function lemonadeChange(bills: number[]): boolean {
  const lemonadeCost = 5;
  const cashRegister = new Map<number, number>();
  cashRegister.set(lemonadeCost, 0);
  cashRegister.set(10, 0);
  cashRegister.set(20, 0);

  if (bills[0] > lemonadeCost) {
    return false;
  }

  for (const bill of bills) {
    if (bill === 10) {
      if (getCash(cashRegister, lemonadeCost) === 0) {
        return false;
      }

      incrementCash(cashRegister, 10);
      decrementCash(cashRegister, lemonadeCost);
    } else if (bill === 20) {
      if (getCash(cashRegister, lemonadeCost) === 0) {
        return false;
      }

      incrementCash(cashRegister, 20);

      let balanceToPay = 15;
      if (getCash(cashRegister, 10) >= 1) {
        decrementCash(cashRegister, 10);
        balanceToPay -= 10;
      }

      const fivesToReturn = balanceToPay / lemonadeCost;
      if (getCash(cashRegister, lemonadeCost) < fivesToReturn) {
        return false;
      }

      decrementCash(cashRegister, lemonadeCost, fivesToReturn);
    } else {
      incrementCash(cashRegister, lemonadeCost);
    }
  }

  return true;
}

function incrementCash(cashMap: Map<number, number>, key: number): void {
  cashMap.set(key, (cashMap.get(key) ?? 0) + 1);
}

function decrementCash(
  cashMap: Map<number, number>,
  key: number,
  amount: number = 1,
): number {
  const newValue = (cashMap.get(key) ?? 0) - amount;
  cashMap.set(key, newValue);
  return newValue;
}

function getCash(cashMap: Map<number, number>, key: number): number {
  return cashMap.get(key) ?? 0;
}
