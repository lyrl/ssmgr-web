import React from 'react';

class EncryptMethodSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.$('#'+this.props.name).selectpicker({
      size: this.props.size ? this.props.size : 5,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value) {
      window.$('#'+this.props.name).selectpicker('val', nextProps.value);
    } else {
      window.$('#'+this.props.name).selectpicker('val', '');
    }
  }

  componentWillUnmount() {

  }

  render() {
    return <select className="form-control selectpicker  show-tick" id={this.props.name} name={this.props.name} onChange={this.props.onChange}  data-live-search="true">
      <option value="">-- 请选择 --</option>
      <optgroup label="Sodium">
        <option>chacha20-poly1305</option>
        <option>chacha20-ietf-poly1305</option>
        <option>xchacha20-ietf-poly1305</option>
        <option>sodium:aes-256-gcm</option>
        <option>salsa20</option>
        <option>chacha20</option>
        <option>chacha20-ietf</option>
      </optgroup>

      <optgroup label="Sodium 1.0.12">
        <option>xchacha20</option>
      </optgroup>

      <optgroup label="OpenSSL">
        <option>aes-128-gcm</option>
        <option>aes-192-gcm</option>
        <option>aes-256-gcm</option>
        <option>aes-128-cfb</option>
        <option>aes-192-cfb</option>
        <option>aes-256-cfb</option>
        <option>aes-128-ofb</option>
        <option>aes-192-ofb</option>
        <option>aes-256-ofb</option>
        <option>aes-128-ctr</option>
        <option>aes-192-ctr</option>
        <option>aes-256-ctr</option>
        <option>camellia-128-cfb</option>
        <option>camellia-192-cfb</option>
        <option>camellia-256-cfb</option>
        <option>bf-cfb</option>
        <option>cast5-cfb</option>
        <option>des-cfb</option>
        <option>idea-cfb</option>
        <option>rc2-cfb</option>
        <option>seed-cfb</option>
        <option>rc4</option>
        <option>rc4-md5</option>
        <option>table</option>
      </optgroup>

      <optgroup label="OpenSSL 1.1">
        <option>aes-128-ocb</option>
        <option>aes-192-ocb</option>
        <option>aes-256-ocb</option>
      </optgroup>
      <optgroup label="mbedTLS">
        <option>mbedtls:aes-128-cfb128</option>
        <option>mbedtls:aes-192-cfb128</option>
        <option>mbedtls:aes-256-cfb128</option>
        <option>mbedtls:aes-128-ctr</option>
        <option>mbedtls:aes-192-ctr</option>
        <option>mbedtls:aes-256-ctr</option>
        <option>mbedtls:camellia-128-cfb128</option>
        <option>mbedtls:camellia-192-cfb128</option>
        <option>mbedtls:camellia-256-cfb128</option>
        <option>mbedtls:aes-128-gcm</option>
        <option>mbedtls:aes-192-gcm</option>
        <option>mbedtls:aes-256-gcm</option>
      </optgroup>
    </select>
  }

}

export default EncryptMethodSelect;