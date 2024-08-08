import React, { useContext, useEffect } from 'react';
import { Button, ConfigProvider } from 'antd';
import { css } from '@emotion/css';

import './css/intro.css';

interface BtnProps {
    type?: string,
    size?: string,
    shape?: string,
    icon?: any
}

function setElementProps(className: string, {propName, value}: any) {
  const items = document.querySelectorAll(className) as unknown as any[];
  
  items.forEach((p) => {
    p.style.setProperty(propName, `${typeof p[value] === 'function' ?  p[value]() + 1 : value}`);
  })
}


const Intro: React.FC<BtnProps> = ({icon}: BtnProps) => {

  useEffect(() => {
    setElementProps('.circle-self', {propName: '--l', value: 'getTotalLength'});
  }, [])

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
    <>
      <div className='btn-wrap'>
        <Button 
            className={`${linearGradientButton} btn-self`} 
            icon={icon} 
            onClick={clickHandle}
            type='primary' size='large' shape='circle' />

        <svg className='circle-svg' width="48" height="48" fill="none">
          <circle className='circle-self' cx="24" cy="24" r="22" />
        </svg>
      </div>
    </>
  );
};

export default Intro;