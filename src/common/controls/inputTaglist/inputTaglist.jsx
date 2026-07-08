import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import colors from 'assets/styles/colors';
import InputAlfanumerico from 'common/controls/inputAlfanumerico';
import { TagsContainer } from './inputTaglist.style';

const InputTaglist = ({
  value,
  onChange,
  disabled,
  label,
  placeholder,
  maxLength,
  delimiter,
  errorMessage,
  tagBackgroundColor,
  tagFontColor,
  tagFontSize,
  tagSize,
  validateTag,
  allowDuplicatesTags,
  allowEmpty,
  onAddTag,
  onRemoveTag,
  onError,
  showError,
  caseSensitive,
  removeSpaces,
  sortTags,
  labelColor,
  labelFontSize,
  onValidationChange,
}) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [hasError, setHasError] = useState(false);
  const [currentErrorMessage, setCurrentErrorMessage] = useState('');

  // Inicializa tags a partir do value (array de strings)
  useEffect(() => {
    if (Array.isArray(value)) {
      setTags(value);
    } else if (!value) {
      setTags([]);
    }
  }, [value]);

  useEffect(() => {
    if (onValidationChange) {
      onValidationChange(!hasError);
    }
  }, [hasError]);

  const processMultipleTags = (inputText) => {
    const rawTags = inputText
      .split(delimiter)
      .map((t) => (removeSpaces ? t.trim() : t))
      .filter((t) => t !== '');

    if (rawTags.length === 0) return;

    // Verifica se alguma tag excede o maxLength
    const hasInvalidLength = rawTags.some((t) => t.length > maxLength);

    if (hasInvalidLength) {
      setHasError(true);
      setCurrentErrorMessage(errorMessage || `Máximo de ${maxLength} caracteres por tag`);
      if (onError) onError(errorMessage || `Máximo de ${maxLength} caracteres por tag`);
      return;
    }

    const tagsAcumuladas = [...tags];

    // Verifica se todas as tags são validas
    const validTags = rawTags.filter((tag) => {
      const processedTag = removeSpaces ? tag.trim() : tag;
      if (!allowEmpty && processedTag === '') return false;

      if (!allowDuplicatesTags) {
        const isDuplicate = caseSensitive
          ? tagsAcumuladas.includes(processedTag)
          : tagsAcumuladas.some((t) => t.toLowerCase() === processedTag.toLowerCase());

        if (isDuplicate) return false;
      }

      if (validateTag) {
        const result = validateTag(processedTag);
        if (!result.isValid) return false;
      }

      tagsAcumuladas.push(processedTag);
      return true;
    });

    if (validTags.length > 0) {
      const newTags = [...tags, ...validTags];
      const sortedTags = sortTags ? [...newTags].sort() : newTags;
      setTags(sortedTags);
      setInputValue('');
      setHasError(false);
      setCurrentErrorMessage('');
      onChange(sortedTags);

      if (onAddTag) {
        validTags.forEach((tag) => onAddTag(tag, sortedTags));
      }
    }
  };

  const handleBlur = () => {
    if (inputValue) processMultipleTags(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (inputValue) processMultipleTags(inputValue);
    }
  };

  const handleChange = (newValue) => {
    setInputValue(newValue);

    const segments = newValue
      .split(delimiter)
      .map((t) => (removeSpaces ? t.trim() : t));

    const hasInvalidSegment = segments.some((s) => s.length > maxLength);

    if (hasInvalidSegment) {
      setHasError(true);
      setCurrentErrorMessage(errorMessage || `Máximo de ${maxLength} caracteres por tag`);
    } else {
      setHasError(false);
      setCurrentErrorMessage('');
    }
  };

  const handleRemove = (index) => {
    if (disabled) return;

    const removedTag = tags[index];
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);

    onChange(newTags);

    if (onRemoveTag) {
      onRemoveTag(removedTag, index, newTags);
    }
  };

  return (
    <div>
      {!disabled && (
        <InputAlfanumerico
          label={label}
          labelColor={labelColor}
          labelFontSize={labelFontSize}
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          errorMessage={currentErrorMessage}
          showValidation={showError && hasError}
          internalValidation={false}
          externalError={hasError}
        />
      )}

      {disabled && label && (
        <div style={{
          fontSize: '12px', marginBottom: '5px', marginLeft: '5px', color: colors.secundary_color_700,
        }}
        >
          {label}
        </div>
      )}

      {tags.length > 0 && (
        <TagsContainer>
          {tags.map((tag, index) => (
            <Chip
              key={`${tag}-${index}`}
              label={tag}
              onDelete={disabled ? undefined : () => handleRemove(index)}
              color="primary"
              size={tagSize}
              style={{
                backgroundColor: tagBackgroundColor,
                color: tagFontColor,
                fontSize: tagFontSize,
                opacity: disabled ? 0.6 : 1,
                cursor: disabled ? 'default' : 'pointer',
              }}
            />
          ))}
        </TagsContainer>
      )}
    </div>
  );
};

InputTaglist.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  delimiter: PropTypes.string,
  errorMessage: PropTypes.string,
  tagBackgroundColor: PropTypes.string,
  tagFontColor: PropTypes.string,
  tagFontSize: PropTypes.string,
  tagSize: PropTypes.oneOf(['small', 'medium']),
  validateTag: PropTypes.func,
  allowDuplicatesTags: PropTypes.bool,
  allowEmpty: PropTypes.bool,
  onAddTag: PropTypes.func,
  onRemoveTag: PropTypes.func,
  onError: PropTypes.func,
  showError: PropTypes.bool,
  caseSensitive: PropTypes.bool,
  removeSpaces: PropTypes.bool,
  sortTags: PropTypes.bool,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.string,
  onValidationChange: PropTypes.func,
};

InputTaglist.defaultProps = {
  value: [],
  disabled: false,
  label: '',
  placeholder: 'Digite os valores separados por ; (ponto e vírgula).',
  maxLength: 10,
  delimiter: ';',
  errorMessage: '',
  tagBackgroundColor: colors.alert_color_100_36,
  tagFontColor: colors.alert_color_500,
  tagFontSize: '12px',
  tagSize: 'small',
  validateTag: null,
  allowDuplicatesTags: true,
  allowEmpty: false,
  onAddTag: null,
  onRemoveTag: null,
  onError: null,
  showError: true,
  caseSensitive: false,
  removeSpaces: true,
  sortTags: false,
  labelColor: '',
  labelFontSize: '',
  onValidationChange: null,
};

export default InputTaglist;
