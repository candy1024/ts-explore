import React, { useContext } from 'react';
import { Button, ConfigProvider } from 'antd';
import { css } from '@emotion/css';

interface BtnProps {
    type?: string,
    size?: string,
    shape?: string,
    icon?: any
}

const Intro: React.FC<BtnProps> = ({icon}: BtnProps) => {
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #6253E1, #04BEFE);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `;

  const clickHandle = (): void => {
    location.href += 'tools';
  }

  return (
    <Button 
        className={linearGradientButton} 
        icon={icon} 
        onClick={clickHandle}
        type='primary' size='large' shape='circle' />
  );
};

export default Intro;