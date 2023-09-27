export const mask = (valueRaw: string) => {
      const valueClean = parseInt(valueRaw.replace(/[\D]+/g, ""));
      if (isNaN(valueClean)) {
        return ''
      }
      let decimal = valueClean.toString();
      decimal = decimal.replace(/([0-9]{2})$/g, ",$1");
      if (!decimal.split(",")[0])  decimal = 0+decimal;
      if (decimal.length > 6) {
        decimal = decimal.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
      }
       return decimal;
    }