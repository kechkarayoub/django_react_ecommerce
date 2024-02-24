
import { SHA512, pack } from './cmi_utils';

export const get_site_infos = () => {
    return {
        site_name: "ProShop",
    };
};
export const render_currency = () => {
    if(get_currency_iso() == "504"){
        return 'DH';
    }
    return '$';
};
export const get_currency_iso = () => {
    return "504";
};


export const get_random_str = (length) => {
    length = length || 10;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
  
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  }

export const get_cmi_hash = (data, storeKey) => {
    data = data || {};
    var hashval = "";
    var keys = Object.keys(data).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    let values = keys.filter(k_ => k_ !== "encoding" && k_ !== "hash").map(key =>{
      return ((data[key] || "") + "").replaceAll("|", "\\|").replaceAll("\\", "\\\\").trim();
    });
    hashval = values.join("|") + "|" + storeKey.replaceAll("|", "\\|").replaceAll("\\", "\\\\");
    var calculatedHashValue = SHA512(hashval);
      var hash = btoa(pack('H*',calculatedHashValue));
    return hash;
  }
  export const submit_cmi_modal = (data, is_prod) => {
    var action = "https://testpayment.cmi.co.ma/fim/est3Dgate";
    if(is_prod){
        action = "";
    }
    var form = document.createElement('form');
    form.method = 'POST';
    form.action = action;
    // Create form fields and set their values
    Object.keys(data).map((key, idx) => {
      var input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = data[key];
      form.appendChild(input);
    });
  
    // Append the form to the document body and submit it
    document.body.appendChild(form);
    form.submit();
  }

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}