
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
  var hashval = "";
  var arr = Object.keys(data).sort(function (a, b) {
    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  arr.map(element => {
    if( element != "hash" && element != "encoding" ){
      let escapedParamValue = (data[element] || "").replaceAll("|", "\\|").replaceAll("\\", "\\\\");
      hashval = hashval + escapedParamValue + "|";
    }
  });
  hashval = hashval + storeKey;
  let calculatedHashValue = SHA512(hashval); 
  let hash = btoa(pack('H*',calculatedHashValue));
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

    
    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = "redirectGet";
    input.value = "TRUE";
    form.appendChild(input);
    
  
    // Append the form to the document body and submit it
    document.body.appendChild(form);
    form.submit();
  }

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export const get_terms_service_notice = (props) => {
  return {
      ar: `بالضغط على <b>${props.registration_label}</b> ، فإنك توافق على <span class="span_link term_of_service_span">شروط الخدمة</span> الخاصة بنا ، و<span class="span_link data_use_policy_span">سياسة استخدام البيانات</span> و<span class="span_link cookie_policy_span">سياسة ملفات تعريف الارتباط</span> الخاصة بنا.`,
      en: `By pressing <b>${props.registration_label}</b>, you agree to our <span class="span_link term_of_service_span">Terms of service</span>, our <span class="span_link data_use_policy_span">Data Use Policy</span> and our <span class="span_link cookie_policy_span">Cookie Policy</span>.`,
      fr: `En appuyant sur <b>${props.registration_label}</b>, vous acceptez nos <span class="span_link term_of_service_span">Conditions d'utilisation</span>, notre <span class="span_link data_use_policy_span">Politique d'utilisation des données</span> et notre <span class="span_link cookie_policy_span">Politique d'utilisation des cookies</span>.`,
  };
};