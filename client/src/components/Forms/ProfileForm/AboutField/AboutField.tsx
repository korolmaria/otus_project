import React, { memo } from 'react';
import cn from 'clsx';
import { getValidates } from 'src/utils/validation';
import { FormItem } from 'src/components/FormItem';
import Input from 'antd/lib/input';
import { FormikHandlers } from 'formik/dist/types';
import { UserOutlined } from '@ant-design/icons';
import { ProfileFormProps } from '../types';
import { useTranslation } from 'react-i18next';
import s from './AboutField.sass';

export type AboutFieldProps = Pick<ProfileFormProps, 'className' | 'disabled'> & {
  submitCount: number;
  touched: boolean;
  errors: string;
  value: string;
  onChange: FormikHandlers['handleChange'];
  onBlur: FormikHandlers['handleBlur'];
};

const prefix = <UserOutlined />;

export const AboutField = memo<AboutFieldProps>(
  ({ className, onChange, onBlur, touched, value, errors, disabled, submitCount }) => {
    const { t } = useTranslation();

    const { validateStatus, help } = getValidates(errors, touched, submitCount);

    return (
      <FormItem
        className={cn(s.root, className)}
        title={t(`forms.ProfileForm.about.title`)}
        required
        validateStatus={validateStatus}
        help={help}
      >
        <Input.TextArea
          prefix={prefix}
          disabled={disabled}
          name="about"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={t(`forms.ProfileForm.about.placeholder`)}
        />
      </FormItem>
    );
  }
);

AboutField.displayName = 'AboutField';