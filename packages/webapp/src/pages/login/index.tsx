import React from 'react';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import styles from '~/pages/login/index.scss';
import { globalConfig } from '~/config';
import Typed from 'typed.js';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export const Login: React.FC = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(ref.current, {
      strings: [
        '你知道那种西瓜最好吃吗?',
        '8424?',
        '麒麟?',
        '黑美人?',
        '冰淇淋西瓜?',
        '早春红玉?',
        '小王子?',
        '洞庭一号?',
        '有兴趣, 不妨一起探讨一下😁',
      ],
      loop: true,
      typeSpeed: 80,
      startDelay: 100,
      cursorChar: '_',
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row>
      <Col sm={0} xs={0} md={12} lg={12} xl={12} xxl={12}>
        <div className={styles.loginLeft}>
          <span ref={ref} />
        </div>
      </Col>
      <Col sm={24} xs={24} md={12} lg={12} xl={12} xxl={12}>
        <div className={styles.loginRight}>
          <div className={styles.loginTitle}>{globalConfig.header}</div>
          <Form initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" layout="vertical">
            <Form.Item<FieldType> label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!' }]}>
              <Input placeholder="请输入用户名" />
            </Form.Item>

            <Form.Item<FieldType> label="密码" name="password" rules={[{ required: true, message: '请输入密码!' }]}>
              <Input.Password placeholder="请输入密码" />
            </Form.Item>

            <Form.Item<FieldType> name="remember" valuePropName="checked">
              <Checkbox>记住我</Checkbox>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
